/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) {
    return 1
  } else {
    return nums[i] * product(nums, i + 1)
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  if (words.length === i) {
    return max
  } else {
    max = Math.max(words[i].length, max)
    return longest(words, i + 1, max)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, $str = '') {
  if (i >= str.length) {
    return $str
  } else {
    $str += str[i]
    return everyOther(str, i + 2, $str)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let left = i
  let right = str.length - i - 1
  if (left >= right) {
    return true
  } if (str[right] !== str[left]) {
    return false
  }
  return isPalindrome(str, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) {
    return -1
  } else if (arr[i] === val) {
    return i
  }
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, $str = '') {
  if (str.length === i) {
    return $str
  } else {
    $str += str[str.length - i - 1]
    return revString(str, i + 1, $str)
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key])
    } else if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]))
    }
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] === val) {
    return mid
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1)
  }
  return binarySearch(arr, val, mid + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
