export type GetLoadingMatchesProps = RegExpExecArray | null;

export const getLoadingMatches = (type: string): GetLoadingMatchesProps =>
  /(.*)(Request|Success|Failure)/.exec(type);
