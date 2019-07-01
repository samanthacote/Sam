import React from 'react';


    <div className="App">
        <ButtonBar handleShoesButtonClick={() => this.handleClick('shoes')}
                   handleLeoButtonClick={() => this.handleClick('leotards')}
                   handleCostumesButtonClick={() => this.handleClick('costumes')} />
        <ShoeList/>
        <Review text={"Please leave your review: " + this.state.shoeValue}/>
        <InfoForm handleSubmit={this.handleSubmit} value={this.state.shoeValue} name='shoeValue' handleChange={this.handleChange} />
        <RemoveButton handleRemoveClick={() => this.handleRemove('shoeValue')} /> 
        <HomeButton handleClick={() => this.handleClick('')} />
    </div>