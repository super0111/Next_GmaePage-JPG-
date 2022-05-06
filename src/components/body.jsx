export const Body = (props) => {
    return (
      <div id="nftProjects">
        <div className="nftProjects-background"><img src="/imgs/nftPeojectsBackground.png" /></div>
        <div className="nftProjects-title"><img src="/imgs/NFT PROPERTIES.png"/></div>
            <div className="row" style={{marginLeft:0, marginRight:0}}>
                <div className="col-xs-12 col-md-6 nftProjects1-display" style={{ }}>
                    {props.data
                        ? props.data.map((d, i) => (  
                            <div className="nftProjects-text-item">   
                                <div className="nftProjects-text" key={i}>{d.text1}</div>
                                <div className="nftProjects-text" key={i}>{d.text2}</div>
                                <div className="nftProjects-text" key={i}>{d.text3}</div>
                                <div className="nftProjects-text" key={i}>{d.text4}</div>
                                <div className="nftProjects-text" key={i}>{d.text5}</div>
                                <div className="nftProjects-text" key={i}>{d.text6}</div>
                                <div className="nftProjects-text" key={i}>{d.text7}</div>
                            </div>
                        ))
                        : 'loading'
                    }
                </div>
                <div className="col-xs-12 col-md-6 nftProjects2-display" style={{ }}>
                    {props.data
                        ? props.data.map((d, i) => (  
                            <div className="nftProjects-text-item" style={{marginLeft:180}}>   
                                <div className="nftProjects-text" key={i}>{d.text8}</div>
                                <div className="nftProjects-text" key={i}>{d.text9}</div>
                                <div className="nftProjects-text" key={i}>{d.text10}</div>
                                <div className="nftProjects-text" key={i}>{d.text11}</div>
                                <div className="nftProjects-text" key={i}>{d.text12}</div>
                                <div className="nftProjects-text" key={i}>{d.text13}</div>
                            </div>
                        ))
                        : 'loading'
                    }
                </div>
            </div>
            {props.data
                ? props.data.map((d, i) => (
                    <div className="nftProjects-footer">
                        <div className="address">{d.verifyAddress}</div>
                        <div className="addressText">{d.verifyAddresstext}</div>
                    </div>
                ))
                : 'loading'
            }
        </div>
    );
  };
  