describe('Javabuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(3)).toBe('Fizz');
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(5)).toBe('Buzz')
    });

    it('divisible by 3 and 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(15)).toBe('FizzBuzz')
    });

  });

  describe('knows when a number is', function() {

    it('is not divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(1)).toBe(1);
    });

    it('is not divisible by 5', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(4)).toBe(4);
    });

    it('is not divisible by 15', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(13)).toBe(13);
    });

  });

});
