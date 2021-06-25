const fs = require('fs')
const readline = require('readline')

const VOWELS = 'AEIOUÁÉÍÓÚaeiouáéíóú'

const princeName = 'His Royal Highness The Prince Philip, Duke of Edinburgh, Earl of Merioneth, Baron Greenwich, Royal Knight of the Most Noble Order of the Garter, Extra Knight of the Most Ancient and Most Noble Order of the Thistle, Member of the Order of Merit, Grand Master and First and Principal Knight Grand Cross of the Most Excellent Order of the British Empire, Knight of the Order of Australia, Additional Member of the Order of New Zealand, Extra Companion of the Queen’s Service Order, Royal Chief of the Order of Logohu, Extraordinary Companion of the Order of Canada, Extraordinary Commander of the Order of Military Merit, Lord of Her Majesty’s Most Honourable Privy Council, Privy Councillor of the Queen’s Privy Council for Canada, Personal Aide-de-Camp to Her Majesty, Lord High Admiral of the United Kingdom'

const getCleanString = string => (
  string.match(/[A-Z]?[ÁÉÍÓÚáéíóú]*/gi).join('').trim()
)

const countVowels = name => {
  let counter = 0
  for (let i = 0; i < name.length; i++) {
    if (VOWELS.includes(name[i])) {
      counter++
    }
  }

  return counter
}

const getScore = string => {
  const name = getCleanString(string)
  const vowelsCount = countVowels(name)
  const consonantsCount = name.length - vowelsCount
  const bonusValue = vowelsCount >= consonantsCount ? 2 : 1
  return ((vowelsCount * 5) + consonantsCount) * bonusValue
}


async function exec() {
  let count = 0
  const princeScore = getScore(princeName)
  const princeScoreDivided = princeScore / 181
  const fileStream = fs.createReadStream('names.txt')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  for await (const name of rl) {
    if (getScore(name) === princeScoreDivided) {
      count++
      console.log(name)
    }
  }
  console.log(`${count} names have a score equals to (Prince Philip's name score divided by 181)`)
}

exec()