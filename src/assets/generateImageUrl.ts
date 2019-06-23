let counter = 0;

const nextCounter = () => (counter += 1).toString();

export const generateImageUrl = (
  width = 300,
  height = 300,
  bust = nextCounter()
) => `https://picsum.photos/${width}/${height}?_=${bust}`;
