import { personalInfo, skills, projects } from './data.js';

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
});
