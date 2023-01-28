var expect = chai.expect

describe('Functions',function(){
    describe('#newDeck',function(){
        it('should create a deck array with 52 cards',function(){
            var x = allCards.length;
            expect(x).to.equal(52)
        })
    })
})