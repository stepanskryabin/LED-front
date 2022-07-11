export default {
    name: 'intersection',
    mounted(el, binding) {
        let options = {
          rootMargin: '0px',
          threshold: 1.0
        };
        // eslint-disable-next-line no-unused-vars
        let callback = (entries, observer) => {
          if (entries[0].isIntersecting) {
            binding.value()
          }
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    }
}