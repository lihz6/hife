type Comparable = string | number;

export default function <T>(items: T[]) {
  return {
    by(getKeys: (x: T) => Comparable | Comparable[]) {
      return items.sort((a, b) => {
        const aks = ([] as any).concat(getKeys(a));
        const bks = ([] as any).concat(getKeys(b));
        const len = aks.length;
        for (let i = 0; i < len; i++) {
          if (aks[i] > bks[i]) return 1;
          if (aks[i] < bks[i]) return -1;
        }
        return 0;
      });
    }
  };
};
