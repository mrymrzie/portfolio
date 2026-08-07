// ── Config ────────────────────────────────────────────────────────
const SKILL_COLORS = {
  research:  '#3D6B9E',
  design:    '#9E4D6B',
  'analyze-build': '#3D7A5C',
  evaluate:  '#6B5099',
};

const IDLE_STROKE  = '#d0ccc4';
const IDLE_WIDTH   = 1.5;
const ACTIVE_WIDTH = 2.5;

// ── Slugify helper ────────────────────────────────────────────────
const slug = str => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// ── Slug → display label ──────────────────────────────────────────
const SKILL_LABELS = {
  'research':      'Research',
  'design':        'Design',
  'analyze-build': 'Analyze & Build',
  'evaluate':      'Evaluate',
};

// ── Build skill cards from data.js ────────────────────────────────
function buildSkills(rows) {
  // Group rows by category, preserving order
  const categories = [];
  const map = {};
  rows.forEach(r => {
    const cat = r.category.trim();
    if (!map[cat]) { map[cat] = { category: cat, tagline: r.tagline?.trim() || '', groups: {} }; categories.push(map[cat]); }
    const grp = r.sub_group.trim();
    if (grp) {
      if (!map[cat].groups[grp]) map[cat].groups[grp] = [];
      map[cat].groups[grp].push(r.skill.trim());
    } else {
      if (!map[cat].groups['']) map[cat].groups[''] = [];
      map[cat].groups[''].push(r.skill.trim());
    }
  });

  const stack = document.getElementById('skills-stack');
  stack.innerHTML = '';

  // Count rendered lines per category for proportional sizing:
  // each sub_group becomes one line; ungrouped skills each get their own line
  const lineCount = cat =>
    Object.entries(cat.groups).reduce((sum, [grp, skills]) =>
      sum + (grp ? 1 : skills.length), 0);
  const itemCounts = categories.map(lineCount);
  const totalItems = itemCounts.reduce((a, b) => a + b, 0);

  categories.forEach(({ category, tagline, groups }, i) => {
    const id  = 'skill-' + slug(category);
    const key = slug(category);

    const card = document.createElement('div');
    card.className = 'skill-card';
    card.dataset.skill = key;
    card.id = id;

    const inner = document.createElement('div');
    inner.className = 'skill-card-inner';

    const h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(category));
    if (tagline) {
      const tl = document.createElement('span');
      tl.className = 'skill-tagline';
      tl.textContent = ' (' + tagline + ')';
      h3.appendChild(tl);
    }
    inner.appendChild(h3);

    const ul = document.createElement('ul');
    Object.entries(groups).forEach(([grp, skills]) => {
      if (grp) {
        // One line: "Sub_group — skill1, skill2, skill3"
        const li = document.createElement('li');
        const label = document.createElement('span');
        label.className = 'sub-label';
        label.dataset.subGroup = slug(grp);
        label.textContent = grp;
        li.appendChild(label);

        const validSkills = skills.filter(s => s);
        if (validSkills.length) {
          li.appendChild(document.createTextNode('\u2009\u2014\u2009'));
          validSkills.forEach((s, idx) => {
            const item = document.createElement('span');
            item.className = 'skill-item';
            item.dataset.skillItem = slug(s);
            item.textContent = s;
            item.addEventListener('mouseenter', e => {
              e.stopPropagation();
              activateSkillItem(slug(s), id);
            });
            item.addEventListener('mouseleave', e => {
              const to = e.relatedTarget;
              if (to && card.contains(to)) {
                if (!to.closest('.skill-item')) activateSkill(id);
                return;
              }
              clearActive();
            });
            li.appendChild(item);
            if (idx < validSkills.length - 1) {
              li.appendChild(document.createTextNode(', '));
            }
          });
        }
        ul.appendChild(li);
      } else {
        skills.filter(s => s).forEach(s => {
          const li = document.createElement('li');
          const item = document.createElement('span');
          item.className = 'skill-item';
          item.dataset.skillItem = slug(s);
          item.textContent = s;
          item.addEventListener('mouseenter', e => {
            e.stopPropagation();
            activateSkillItem(slug(s), id);
          });
          item.addEventListener('mouseleave', e => {
            const to = e.relatedTarget;
            if (to && card.contains(to)) {
              if (!to.closest('.skill-item')) activateSkill(id);
              return;
            }
            clearActive();
          });
          li.appendChild(item);
          ul.appendChild(li);
        });
      }
    });

    inner.appendChild(ul);
    // Give each card flex-grow proportional to its content
    card.style.flexGrow = (itemCounts[i] / totalItems) * categories.length;

    card.appendChild(inner);
    stack.appendChild(card);

    card.addEventListener('mouseenter', () => activateSkill(id));
    card.addEventListener('mouseleave', clearActive);
  });
}

// ── Build project cards from data.js ──────────────────────────────
function buildProjects(rows) {
  const stack = document.getElementById('projects-stack');
  stack.innerHTML = '';

  let lastCategory = null;

  rows.forEach((row, i) => {
    const name     = row.name.trim();
    const category = row.category.trim();
    const desc     = row.description.trim();
    const status   = row.status.trim();
    const meta     = (row.meta || '').trim();
    const skills   = row.skills.split(',').map(s => slug(s.trim()));
    const highlights = (row.highlight_skills || []).map(s => slug(String(s).trim())).filter(Boolean);
    const imgColor = (row.img_color || '#dedad3').trim();
    const projId   = 'proj-' + slug(name);

    // Emit a category label when the category changes
    if (category !== lastCategory) {
      const label = document.createElement('div');
      label.className = 'cat-label';
      label.id = 'cat-' + slug(category) + '-' + i;
      label.textContent = category;
      if (lastCategory !== null) label.style.marginTop = '';
      stack.appendChild(label);
      lastCategory = category;
    }

    // Project card
    const article = document.createElement('article');
    article.className = 'project-card';
    article.id = projId;
    article.dataset.skills = skills.join(',');
    article.dataset.highlightSkills = highlights.join(',');

    const img = document.createElement('div');
    img.className = 'project-img';
    img.style.setProperty('--img-bg', imgColor);

    const body = document.createElement('div');
    body.className = 'project-card-body';

    const top = document.createElement('div');
    top.className = 'project-card-top';

    const h4 = document.createElement('h4');
    h4.textContent = name;
    top.appendChild(h4);

    if (meta) {
      const metaEl = document.createElement('p');
      metaEl.className = 'project-meta';
      metaEl.textContent = meta;
      top.appendChild(metaEl);
    }

    const p = document.createElement('p');
    p.textContent = desc;

    const tags = document.createElement('div');
    tags.className = 'project-tags';
    skills.forEach(s => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.dataset.skill = s;
      tag.textContent = SKILL_LABELS[s] || s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      tags.appendChild(tag);
    });

    body.appendChild(top);
    body.appendChild(p);
    body.appendChild(tags);
    article.appendChild(img);
    article.appendChild(body);
    stack.appendChild(article);

    article.addEventListener('mouseenter', () => activateProject(article));
    article.addEventListener('mouseleave', clearActive);
  });
}

// ── D3 bezier curves ──────────────────────────────────────────────
const mainEl = document.getElementById('main');
const svg    = d3.select('#connections-svg');
let allPaths = [];

const linkGen = d3.linkHorizontal().x(d => d.x).y(d => d.y);

function edgePoint(el, edge) {
  const mR = mainEl.getBoundingClientRect();
  const eR  = el.getBoundingClientRect();
  return {
    x: edge === 'right' ? eR.right - mR.left : eR.left - mR.left,
    y: eR.top + eR.height / 2 - mR.top,
  };
}

function drawCurves() {
  svg.selectAll('*').remove();
  allPaths = [];

  document.querySelectorAll('.project-card').forEach(cardEl => {
    const skills = (cardEl.dataset.skills || '').split(',').filter(Boolean);
    skills.forEach(skillKey => {
      const skillEl = document.getElementById('skill-' + skillKey);
      if (!skillEl) return;

      const source = edgePoint(skillEl, 'right');
      const target = edgePoint(cardEl,  'left');

      const path = svg.append('path')
        .datum({ source, target })
        .attr('d', linkGen)
        .attr('fill', 'none')
        .attr('stroke', IDLE_STROKE)
        .attr('stroke-width', IDLE_WIDTH)
        .attr('stroke-dasharray', '5,5')
        .attr('opacity', 0.5);

      allPaths.push({ skillKey, cardEl, path });
    });
  });
}

function clearActive() {
  document.querySelectorAll('.skill-card, .cat-label, .project-card').forEach(e => e.classList.remove('active', 'highlight'));
  document.querySelectorAll('.skill-item.highlight, .sub-label.highlight').forEach(e => e.classList.remove('highlight'));
  allPaths.forEach(({ path }) =>
    path.attr('stroke', IDLE_STROKE)
        .attr('stroke-width', IDLE_WIDTH)
        .attr('stroke-dasharray', '5,5')
        .attr('opacity', 0.5)
  );
}

function highlightProjectsByCategory(skillKey) {
  document.querySelectorAll('.project-card').forEach(card => {
    const skills = (card.dataset.skills || '').split(',').filter(Boolean);
    if (skills.includes(skillKey)) card.classList.add('highlight');
  });
}

function highlightProjectsBySkillItem(itemSlug) {
  document.querySelectorAll('.project-card').forEach(card => {
    const items = (card.dataset.highlightSkills || '').split(',').filter(Boolean);
    if (items.includes(itemSlug)) card.classList.add('highlight');
  });
}

function activateSkill(skillId) {
  clearActive();
  document.getElementById(skillId)?.classList.add('active');
  const skillKey = skillId.replace(/^skill-/, '');
  highlightProjectsByCategory(skillKey);
  allPaths.forEach(({ skillKey: key, path }) => {
    if (key !== skillKey) return;
    path.attr('stroke', SKILL_COLORS[key] || '#333')
        .attr('stroke-width', ACTIVE_WIDTH)
        .attr('stroke-dasharray', null)
        .attr('opacity', 1);
  });
}

function activateSkillItem(itemSlug, parentSkillId) {
  clearActive();
  document.getElementById(parentSkillId)?.classList.add('active');
  highlightSkillItems([itemSlug]);
  highlightProjectsBySkillItem(itemSlug);

  // Light curves only for projects that actually use this skill item
  allPaths.forEach(({ skillKey, cardEl, path }) => {
    const items = (cardEl.dataset.highlightSkills || '').split(',').filter(Boolean);
    if (!items.includes(itemSlug)) return;
    path.attr('stroke', SKILL_COLORS[skillKey] || '#333')
        .attr('stroke-width', ACTIVE_WIDTH)
        .attr('stroke-dasharray', null)
        .attr('opacity', 1);
  });
}

function highlightSkillItems(slugs) {
  slugs.forEach(itemSlug => {
    document.querySelectorAll('.skill-item[data-skill-item="' + itemSlug + '"]').forEach(el => {
      el.classList.add('highlight');
      const label = el.closest('li')?.querySelector('.sub-label');
      if (label) label.classList.add('highlight');
    });
  });
}

function activateProject(cardEl) {
  clearActive();
  const skills = (cardEl.dataset.skills || '').split(',').filter(Boolean);
  skills.forEach(s => document.getElementById('skill-' + s)?.classList.add('active'));
  const highlights = (cardEl.dataset.highlightSkills || '').split(',').filter(Boolean);
  highlightSkillItems(highlights);
  allPaths.forEach(({ skillKey, cardEl: cel, path }) => {
    if (cel !== cardEl) return;
    path.attr('stroke', SKILL_COLORS[skillKey] || '#333')
        .attr('stroke-width', ACTIVE_WIDTH)
        .attr('stroke-dasharray', null)
        .attr('opacity', 1);
  });
}

// ── Initialise from data.js ───────────────────────────────────────
buildSkills(SKILLS);
buildProjects(PROJECTS);

window.addEventListener('load', drawCurves);
window.addEventListener('resize', drawCurves);

// ── Contact modal ─────────────────────────────────────────────────
const contactModal = document.getElementById('contact-modal');
const contactBtn = document.getElementById('contact-btn');

function openContactModal() {
  contactModal.hidden = false;
  document.body.style.overflow = 'hidden';
  contactModal.querySelector('.contact-modal-close')?.focus();
}

function closeContactModal() {
  contactModal.hidden = true;
  document.body.style.overflow = '';
  contactBtn?.focus();
}

contactBtn?.addEventListener('click', openContactModal);
contactModal?.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeContactModal);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && contactModal && !contactModal.hidden) closeContactModal();
});
