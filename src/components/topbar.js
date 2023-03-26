export default function TopBar() {
  /*html*/
  const render = () => `
  <div class="header | h-header p-2 bg-primary text-white flex items-center sticky-top">
    <h1 class="brand">
      <a class="link text-xlarge text-white" href="/">v-wallet</a>
    </h1>
  </div>
  `;
  return { render };
}
