function  destructivelyAppendKitten(name) {
  kittens.push(name)
} 
  
function  destructivelyPrependKitten(name) {
  kittens.unshift(name)
} 

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var myKittens=kittens.concat(name)
  return myKittens
}

function prependKitten(name) {
  var myKittens=[name].concat(kittens)
  return myKittens
}


function removeLastKitten() {
  
}

/*
  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
*/