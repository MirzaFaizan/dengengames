import React, { Component } from 'react';
import './header.css';

class header extends Component {
    render() {
        return (
            <div align="center">
                <h1>Hello</h1>

            </div>
        );
    }
}

export default header;


// <header title="">
//     <img src="./images/logo.png" id="logo" alt="" height="60" title=""/>
//     <span id="header-left2" style="display: none;">
//                         <i className="fa fa-bars mv">
//
//                         </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-comments mv"></i>
//                     </span>
//     <span id="header-left" title="">
//                     <span id="header-menu" className="hide">
//                         <span>DICE</span>
//                         <span>MOON</span>
//                         <span>RING</span>
//                         <span>Fairness</span>
//                         <span>Referrals</span>
//                         <span>How To Play</span>
//                         <span><a href="./pdf/whitebook_en.pdf" target="_blank">Whitepaper</a></span>
//                         <span id="fh">DIVIDENDS</span><span>PROFILE</span>
//                         <span className="hide">Gift Box</span>
//                         <span>Super Bowl</span>
//                     </span>
//                         <span id="header-menu" title="">
//                             <a href="#/dice"><span className="active header-menu-item">
//                                 <i className="iconfont icon-dice"></i>
//                                 <span>DICE</span>
//                             </span></a>
//                             <a href="#/moon"><span className="header-menu-item" title="">
//                                 <i className="iconfont icon-crash" title=""></i>
//                                 <span title="">MOON</span>
//                             </span></a>
//                             <a href="#/ring" title="">
//                                 <span className="header-menu-item" title="" style="position: relative; top: 4px;">
//                                     <img src="./images/ring.png" height="35" title=""/>
//                                         <span className="">RING</span>
//                                 </span>
//                             </a>
//                             <span className="header-menu-item" title="">
//                                 <i className="iconfont icon-divide" title=""></i>
//                                 <span>DIVIDENDS</span>
//                             </span><a href="#/scan"><span className="header-menu-item" title="">
//                             <i className="iconfont icon-scan" title=""></i>
//                             <span>PROFILE</span>
//                         </span>
//                         </a>
//                             <span className="dib por" title="">
//                                 <span data-toggle="dropdown" className="header-menu-item" style={{cursor: 'pointer'}}>
//                                     <i className="iconfont icon-help" title=""></i>
//                                     <span>HELP</span>
//                                 </span>
//                                 <ul className="dropdown-menu " id="my-dropdown-menu" aria-labelledby="dropdownMenu2"   style="width: 120px; text-align: left; padding-left: 8px; right: -45px; top: 97%;">
//                                     <li style="height: 25px;">Fairness</li>
//                                     <li style="height: 25px;">Referrals</li>
//                                     <li style="height: 25px;">How To Play</li>
//                                     <a href="./pdf/whitebook_en.pdf" target="_blank">
//                                     <li style="height: 25px;">Whitepaper</li>
//                                     </a>
//                                 </ul>
//                             </span>
//                             <a href="https://trontrade.io/" target="_blank">
//                             <span className="header-menu-item" style="position: relative; top: 4px;">
//                             <img src="./images/trade.png" height="35" title=""/>
//                             <span className="">EXCHANGE</span></span></a>
//                             <span className="header-menu-item hide " style="position: relative; top: 4px;">
//                                 <img src="./images/sdj/sdIcon.png" height="35"/><span>Gift Box</span>
//                                     <lable id="sdj-box-num-1" className="hide">0</lable>
//                             </span>
//                             <span className="header-menu-item  " style="position: relative; top: 4px;">
//                                 <img src="./images/superbowl/icon.png" height="34"/>
//                                     <span>Super Bowl</span>
//                                     <lable id="sdj-box-num" className="hide">0</lable>
//                             </span>
//                         </span>
//                     </span>
//     <span id="header-info" title="">
//                         <div id="connect" title="">
//                             <p>
//                                 <a href="http://t.me/tronbetio" target="_blank">
//                                     <i className="iconfont icon-telegram" title="" style="font-size: 20px;">
//
//                                     </i>
//                                 </a>
//                             </p>
//                             <p>
//                             <a href="https://twitter.com/tronbet" target="_blank"><i className="iconfont icon-twitter" title="" style="font-size: 20px;">
//
//                             </i>
//                             </a>
//                             </p>
//                             <p id="wx_icon" className="por" title=""><span className="shequIcon" target="_blank">
//                                 <i className="iconfont icon-weixin1" title="" style="font-size: 20px;"></i>
//                             </span>
//                                 <img id="wx_qrcode" src="./images/wx_qrcode.jpg" width="200" style="display: none;"/></p>
//                             <p id="guildchat" className="por"><a href="http://guildchat.io/g/yGy6ka" target="_blank">
//                                 <img src="./images/guildchat.png" width="20" style="position: relative; top: 4px;" title=""/>
//                             </a>
//                                 <img id="wx_qrcode2" src="./images/guildchatcode.png" width="200" style="display: none;"/>
//                             </p>
//                         </div>
//         &nbsp;&nbsp;&nbsp;&nbsp;>
//                         <span className="hide" style="margin-right: 30px;">
//                             <span className="online" style="font-size: 20px;">●</span>
//                             Online: 0</span>
//                         <span style="margin-right: 30px;"><span title="" style="cursor: pointer;">Login</span>
//                         </span>
//                         <div className="dib por" id="wallet-select" title="" style="margin-right: 30px;">
//                             <span data-toggle="dropdown" style="cursor: pointer;">
//                                 <img className="vm" src="./images/tronLink.png" alt="" height="40" width="40" title=""/>&nbsp;tronLink&nbsp;
//                                 <span className="caret">
//                                     </span></span>
//                             <ul className="dropdown-menu " id="my-dropdown-menu" aria-labelledby="dropdownMenu2" style="width: 120px; text-align: left; padding-left: 8px;">
//                                 <li className="hide">
//                                     <img className="vm" src="./images/tronLink.png" height="40"
//                                          alt=""/>
//                                     &nbsp;tronLink</li>
//                                 <li className=""><img className="vm" src="./images/scatter.png" height="40"
//                                                       alt=""/>&nbsp;scatter
//                                 </li>
//                                 <li className=""><img className="vm" src="./images/guildchat.png" width="32" height="32"
//                                                       alt=""/>
//                                     &nbsp;guildWallet </li>
//                             </ul>
//                         </div>
//                         <div className="dib por" title="">
//                             <span data-toggle="dropdown" style="cursor: pointer;">
//                                 <img className="vm" src="./images/country1.png" width="40" height="25"
//                                      alt=""/>&nbsp;&nbsp;
//
//                                 <span className="caret"></span>
//                             </span>
//                             <ul className="dropdown-menu " id="my-dropdown-menu" aria-labelledby="dropdownMenu2">
//                                 <li className="" style="margin-top: 10px;">
//                                     <img className="vm" src="./images/country2.png" width="40" height="25" alt=""/>
//                                 </li>
//                                 <li className="hide"><img className="vm" src="./images/country1.png" width="40" height="25" alt=""/></li>
//                                 <li className="" style="margin-top: 10px;"><img className="vm" src="./images/country4.png" width="40" height="25" alt=""/></li>
//                                 <li className="" style="height: 25px;"><img src="./images/country.png" width="40" height="25" alt=""/></li>
//                                 <li className="" style="margin-top: 10px;">
//                                     <img className="vm" src="./images/country5.png" width="40" height="25" alt=""/></li>
//                                 <li className="" style="margin-top: 10px;"><img className="vm" src="./images/country6.png" width="40" height="25" alt=""/>
//                     </li>
//                         <li className="" style="margin-top: 10px;">
//                             <img className="vm" src="./images/country7.png" width="40" height="25" alt=""/>
//                     </li>
//                     </ul>
                    {/*</div>*/}
                {/*</span>*/}
{/*</header>*/}
