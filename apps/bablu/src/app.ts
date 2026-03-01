export const handler = () => {
  console.log('Hello World')
  if (process.env.DISCORD_TOKEN) {
    console.log('Discord token exists')
  }
}