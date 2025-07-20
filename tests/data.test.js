import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { personalInfo, skills, projects } from '../src/data.js';

test('personal data has photo', () => {
  assert.ok(fs.existsSync(new URL('../src/' + personalInfo.photo, import.meta.url)));
});

test('personal data has phone', () => {
  assert.ok(personalInfo.phone);
});

test('personal data has names', () => {
  assert.ok(personalInfo.firstName);
  assert.ok(personalInfo.lastName);
});

test('skills list has at least 5 elements', () => {
  assert.ok(Array.isArray(skills));
  assert.ok(skills.length >= 5);
});

test('projects list has at least 3 elements', () => {
  assert.ok(Array.isArray(projects));
  assert.ok(projects.length >= 3);
});
