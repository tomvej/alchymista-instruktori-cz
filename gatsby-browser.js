/* eslint-disable import/prefer-default-export */

export const onClientEntry = () => {
    /* IntersectionObserver polyfill for IE11 */
    if (!('InterSectionObserver' in window)) {
        import('intersection-observer'); // eslint-disable-line no-unused-expressions
    }
};
