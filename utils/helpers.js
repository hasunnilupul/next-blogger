/**
 * 
 * @name classNames
 * @description concat array of classnames into a single string
 * @param  {...string} classes array of css classnames
 * @returns 
 */
export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}