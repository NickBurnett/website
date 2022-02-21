export function getTheme() {
  if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
  return localStorage.getItem('theme');
}
export function toggleTheme() {
  let theme = getTheme();
  if (theme === 'dark') theme = 'light';
  else theme = 'dark';
  localStorage.setItem('theme', theme);
  updateTheme();
}
export function updateTheme() {
  const root = document.getElementsByTagName('html')[0];
  const props = ['background', 'text', 'accent-a', 'accent-b'];
  const comp = getComputedStyle(root);
  props.forEach((p) =>
    root.style.setProperty(
      `--theme-${p}`,
      comp.getPropertyValue(`--${getTheme()}-${p}`)
    )
  );
}
