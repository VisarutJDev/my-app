const MdScreenSize = 960;

export function isMdScreen(screen_width) {
  if (screen_width >= MdScreenSize) {
    return true;
  } else {
    return false;
  }
}
