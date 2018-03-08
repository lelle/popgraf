export default (player) => {

  player.once('prepared', () => {
    console.log('prepared');
  });

};
