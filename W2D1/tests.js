describe(" tester ", function(){
   it("sum of array number ",function(){
       assert.equal(sum([1,2,3]),6);
    });

    it("multiplcation of array numbers" ,function(){
        assert.equal(multiples([1,2,3,4]),24);
    });

    it(" reverse string ", function(){
        assert.equal(reverse('mom'),'mom')
    });

    it(" fileter Long Words that are longer than i ",function(){
        assert.equal(filterLongWords(['medhane','sam','swa','heni'],4),('medhane'))
    })

});