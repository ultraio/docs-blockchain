---
title: 'Predicate System'
order: 4

---

# Predicate System

## How it works

Developers may allow certain actions to be performed by other accounts at the cost of their own POWER resources using the `allowpred` action. Resources may be revoked using the `revokepred` action. Developers may also specify a predicate action to call to verify if this action should be paid or not (e.g. check that a user is a premium user or is whitelisted).

## Relevant Actions

[allowpred - setup a predicate](./system-actions/allowpred.html)

[revokepred - reset a predicate](./system-actions/revokepred.html)

## Relevant Tables

[payerpred - predicates-for-paying-for-3rd-parties](./data-structures-overview.html#payerpred-predicates-for-paying-for-3rd-parties)
