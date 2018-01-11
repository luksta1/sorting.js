describe('Bubble Sort', function() {
    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough();
    });
    beforeEach(function() {
        window.swap.calls.reset();
    });
    it('counts the correct number of swaps', function() {
        var testArr = [2, 1]
        window.swap(testArr, 0, 1);
        expect(window.swap.calls.count()).toEqual(1);
        // console.log(testArr)
    });

    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
        expect(window.swap.calls.count()).toEqual(0);
    });

    it('sorts a simple array in place', function() {
        var testArr = [2, 1]
        expect(bubbleSort(testArr)).toEqual([1, 2]);
        expect(window.swap.calls.count()).toEqual(1);
    });

    it('sorts a 3 item array in place', function() {
        var testArr = [3, 2, 1]
        expect(bubbleSort(testArr)).toEqual([1, 2, 3]);
        expect(window.swap.calls.count()).toEqual(3);
    });

    it('sorts a 10 item array in place', function() {
        var testArr = [3, 2, 1, 6, 8, 4, 9, 0, 5, 7]
        expect(bubbleSort(testArr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(window.swap.calls.count()).toEqual(17);
    });
});

describe('Swap', function() {
    it('swap values in an two item array', function() {
        var testArr = [2, 1]
        swap(testArr, 0, 1);
        expect(testArr).toEqual([1, 2]);
    });
});