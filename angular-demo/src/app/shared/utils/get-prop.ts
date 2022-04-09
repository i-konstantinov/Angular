export function getProp(value: Record<string | number, any> | any[], path: (string | number)[]): any {
    if (
      value === null ||
      typeof value !== 'object'
    ) { return null; }
    let result = value;
    for (let currentPart of path) {
      result = result[currentPart as any];
      if (!result) { return result }
    }
    return result;
  }