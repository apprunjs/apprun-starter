import app from '../apprun';
const { title } = window['site_meta'];
export default () => <header>
  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
    {title}
  </h2>
</header>