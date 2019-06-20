//only here to mock a wait-time for data retrieval and to facilitate a loading screen.

export const getBalletStyles = () => {
  return new Promise ((resolve, reject) => {
    setTimeout( () => {
      resolve('Classical ballet has training methods which often get their names by their creators.');
    }, 2000)
  });
};

