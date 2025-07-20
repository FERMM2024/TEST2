import { personalInfo, skills, projects } from './data.js';

<<<<<<< HEAD
function renderPersonal(info) {
  document.getElementById('name').textContent = `${info.firstName} ${info.lastName}`;
  document.getElementById('phone').textContent = info.phone;
  document.getElementById('photo').src = info.photo;
}

function renderSkills(list) {
  const skillsList = document.getElementById('skills');
  list.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

function renderProjects(list) {
  const projectsList = document.getElementById('projects');
  list.forEach(proj => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = proj.url;
    a.textContent = proj.name;
    li.appendChild(a);
    projectsList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonal(personalInfo);
  renderSkills(skills);
  renderProjects(projects);
=======
document.getElementById('name').textContent = `${personalInfo.firstName} ${personalInfo.lastName}`;
document.getElementById('phone').textContent = personalInfo.phone;
document.getElementById('photo').src = personalInfo.photo;

const skillsList = document.getElementById('skills');
skills.forEach(skill => {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projectsList = document.getElementById('projects');
projects.forEach(proj => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = proj.url;
  a.textContent = proj.name;
  li.appendChild(a);
  projectsList.appendChild(li);
>>>>>>> main
});
