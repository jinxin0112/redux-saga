export async function fetchCount() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 4396 });
    }, 1000);
  });
}
