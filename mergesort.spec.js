describe('Split Array function', function() {
    beforeAll(function() {
        spyOn(window, 'split').and.callThrough();
    });
    beforeEach(function() {
        window.split.calls.reset();
    });
    it('is able to split an array into two halves', function() {
        // your code here 
        var testArr = [2, 1];

        expect(split(testArr)).toEqual([
            [2],
            [1]
        ]);
        expect(window.split.calls.count()).toEqual(1);

        // window.split(testArr);
        // expect(window.split.calls.count()).toEqual(1);
        // console.log(testArr)

    });
    it('runs split properly on an array with one element', function() {
        // your code here 
        var testArr = [2];

        expect(split(testArr)).toEqual([
            [2],
            []
        ]);
        expect(window.split.calls.count()).toEqual(1);

    });
    it('runs split properly on an empty array', function() {
        // your code here 
        var testArr = [];

        expect(split(testArr)).toEqual([
            [],
            []
        ]);
        expect(window.split.calls.count()).toEqual(1);

    });
});

describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
        // test the merging algorithm
        expect(merge([2], [1])).toEqual([2, 1]);
        expect(merge([2, 3], [1, 4])).toEqual([2, 3, 1, 4]);
        expect(merge([2, 2, 2], [1, 1, 1])).toEqual([2, 2, 2, 1, 1, 1]);
        // expect(merge([2], [1])).toEqual([2, 1]);
        // expect(merge([2], [1])).toEqual([2, 1]);
    });
});