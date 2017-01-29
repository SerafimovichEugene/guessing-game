class GuessingGame 
		{
			constructor() 
			{
				this.tempNumber = null;
				this.minIndex = null
				this.maxIndex = null
			}
	
			setRange(min, max) {
				this.minIndex = min;
				this.maxIndex = max;
				this.array = [];
				for (var i = min; i <= max ; i++) {
					this.array.push(i);
				}
			}
	
			guess() {				
				this.tempNumber = this.array[Math.floor(this.array.length/2)];				
				return this.tempNumber;
			}
	
			lower() {
				this.array = [];
				for (var i = this.minIndex; i <= this.tempNumber; i++) {
					this.array.push(i);
				}
				this.maxIndex = this.array[this.array.length - 1];
			}
	
			greater() {
				this.array = [];
				for (var i = this.tempNumber; i <= this.maxIndex; i++) {
					this.array.push(i);
				}
				this.minIndex = this.array[0];
			}
		}

module.exports = GuessingGame;
