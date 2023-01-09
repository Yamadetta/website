import useTranslit from '@/hooks/useTranslit';

export default function (title) {
  let handle = title.split(' ');
  for (let i = 0; i < handle.length; i++) {
    const item = handle[i];
    if (!/[a-zA-Z]/.test(item)) {
      handle[i] = useTranslit(item);
    }
  }

  return handle.join('-').toLowerCase();
}