import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, selection } from '../src/projects.ts';

test('preserves approved repositories and includes the revised selection',()=>{
  const repositories = new Set(projects.flatMap(p=>p.repositories.map(r=>r.name)));
  for(const name of ['FrancentrIA','FrancentrIA-Frontend','firmware-enermind','Urban_Pass','Backend-UrbanPass','Sistema-Admisiones','sistemaNotasAsistencia','Sistema-Asistencia-Notas','GnosisNancy','VencIA','VencIA-co_app']){
    assert.ok(repositories.has(`brahian-mesa/${name}`),name);
  }
  assert.ok(![...repositories].some(name=>/smartstock/i.test(name)));
  assert.ok(selection.excludedRepositories.includes('brahian-mesa/SmartStock-'));
});

test('cards have bilingual descriptions and evidence from their linked repositories',()=>{
  assert.equal(new Set(projects.map(p=>p.id)).size, projects.length);
  for(const p of projects){
    assert.ok(p.description.es && p.description.en,p.id);
    assert.ok(p.evidence.length,p.id);
    for(const source of p.evidence){
      assert.match(source.sha,/^[a-f0-9]{40}$/);
      const repository=p.repositories.find(r=>r.name===source.repository);
      assert.ok(repository,source.repository);
      assert.ok(!repository.empty,'An empty repository cannot substantiate claims');
    }
  }
});

test('unverified organization stays pending rather than becoming invented cards',()=>{
  assert.ok(selection.pending.some(item=>item.owner==='enermid-energy'));
  assert.ok(!projects.some(p=>p.repositories.some(r=>r.name.startsWith('enermid-energy/'))));
});
