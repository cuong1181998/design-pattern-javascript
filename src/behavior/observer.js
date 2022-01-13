class Auctioneer
{
    constructor(){
        this.bidderList = []
    }
    
    announceNewBidderPrice()
    {
        this.notifyBidders();
    }
     
    registerBidder(bidder)
    {
        this.bidderList.push(bidder);
    }
    
    notifyBidders()
    {
        this.bidderList.forEach(bidder => bidder.update())
    }
}


class Bidder 
{
    constructor(name){
        this.name = name
        this.bidPrice = null
    }
    
    update()
    {
        console.log(`${this.name} is offering ${this.bidPrice} dollars`);
        if (this.bidPrice > 500)
        {
            console.log(`Sold to ${this.name}`);
        }
    }
        
    giveNewPrice(price)
    {
        this.bidPrice = price;
    }
}