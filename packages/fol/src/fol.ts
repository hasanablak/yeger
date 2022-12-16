import grammar from '~/fol.ohm-bundle'
import type { Model } from '~/model'
import { parse } from '~/parser'

export * from '~/model'
export * from '~/validator'
export * from '~/fol.ohm-bundle'
export type { MatchResult } from 'ohm-js'

function evaluate(model: Model, formula: string): boolean {
  return parse(formula).evaluate(model, {})
}

export const FOL = {
  evaluate,
  match: (formula: string) => grammar.match(formula),
  parse,
} as const