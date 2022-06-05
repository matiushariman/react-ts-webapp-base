export type GetSuccessMatchesProps = RegExpExecArray | null;

export const getSuccessMatches = (type: string): GetSuccessMatchesProps =>
  /(.*)(Request|Success)/.exec(type);
