import { keyframes } from '@emotion/css'

/**
 * Function for creating keyframes and generating them into unique animation classname.
 *
 * @param {Object} values - object css keyframes.
 * @returns {String} string css classname.
 */

export const createKeyframes = (values) => keyframes(values)
