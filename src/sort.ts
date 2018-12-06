type Comparable = string | number;

export default function <T>(items: T[]) {
  return {
    by(getKeys: (item: T) => Comparable | Comparable[]) {
      return items.sort((a, b) => {
        const aks = ([] as any[]).concat(getKeys(a));
        const bks = ([] as any[]).concat(getKeys(b));
        const len = Math.min(
          aks.length,
          bks.length
        );
        for (let i = 0; i < len; i++) {
          if (aks[i] < bks[i]) return -1;
          if (aks[i] > bks[i]) return 1;
        }
        return 0;
      });
    }
  };
};
