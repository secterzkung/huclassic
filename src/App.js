// import logo from './logo.svg';
import './App.css';
import LoginBox from './loginBox';
import SiteHeader from './siteHeader';
import YeekeeVip from './yeekeeVip';
import ThaiLotto from './thaiLotto';
import Aomsin from './aomsin';
import Tolaosoal from './tolaosoal';
import Lotto from './lotto';
import Yeekee from './yeekee';



function App() {

  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <LoginBox></LoginBox>
      <section className = "contentbox">
        <div className = "container">
          <div className ="row px-2">
            <YeekeeVip round="1" up="XXX" down="XX" yeekeedate="01-Feb-2023"></YeekeeVip>
            <ThaiLotto up="XXXXXX" up3="XXX" down3="XXX" down2="XX" thaidate="01-Feb-2023"></ThaiLotto>
            <Aomsin up="XXXXXX" up3="XXX" down2="XX" lottodate="01-Feb-2023"></Aomsin>
            <Tolaosoal up="XXXXXX" up3="XXX" down2="XX" lottodate="01-Feb-2023"></Tolaosoal>
          </div>
          <div className="bgwhitealpha login shadow-sm rounded p-2 xtarget" id="foreignStock">
            <h6 className="text-dark"><img src = "./images/icon/la.svg" alt="" className="height20" /> หวยลาว <span className="badge badge-danger">22-Jan-2023</span></h6>
      
            <div className="">
              <div className="row px-0 m-0">
                <Lotto lottosubname="ลาว HD" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาว VIP" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาวกาชาด" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาวทีวี" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาวสตาร์" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาวสตาร์ VIP" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ลาวสามัคคี" lottoflag="./images/icon/la.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
              </div>
            </div>
          </div>

          <div className="bgwhitealpha login shadow-sm rounded p-2 xtarget" id="foreignStock">
            <h6 className="text-dark"><img src = "./images/icon/vn.svg" alt="" className="height20" /> หวยเวียดนาม <span className="badge badge-danger">22-Jan-2023</span></h6>
            <div className="">
              <div className="row px-0 m-0">
                <Lotto lottosubname="หวยฮานอย 4D" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยฮานอย VIP" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอย EXTRA" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอย HD" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอยกาชาด" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอยทีวี" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอยพัฒนา" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอยสตาร์" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="ฮานอยสามัคคี" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="เวียดนาม/ฮานอย" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="เวียดนาม/ฮานอย (พิเศษ)" lottoflag="./images/icon/vn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
              </div>
            </div>
          </div>

          <div className="bgwhitealpha login shadow-sm rounded p-2 xtarget" id="foreignStock">
            <h6 className="text-dark"><img src = "./images/icon/my.svg" alt="" className="height20" /> หวยมาเลย์ <span className="badge badge-danger">22-Jan-2023</span></h6>
            <div className="">
              <div className="row px-0 m-0">
                <Lotto lottosubname="หวยมาเลย์" lottoflag="./images/icon/my.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
              </div>
            </div>
          </div>

          <div className="bgwhitealpha login shadow-sm rounded p-2 xtarget" id="foreignStock">
            <h6 className="text-dark"> หวยหุ้น <span className="badge badge-danger">22-Jan-2023</span></h6>
            <div className="">
              <div className="row px-0 m-0">
                <Lotto lottosubname="หวยหุ้นจีนรอบบ่าย" lottoflag="./images/icon/cn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นจีนรอบเช้า" lottoflag="./images/icon/cn.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นดาวน์โจน" lottoflag="./images/icon/us.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นนิเคอิรอบบ่าย" lottoflag="./images/icon/jp.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นนิเคอิรอบเช้า" lottoflag="./images/icon/jp.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นรัสเซีย" lottoflag="./images/icon/ru.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นสิงคโปร์" lottoflag="./images/icon/sg.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นอังกฤษ" lottoflag="./images/icon/gb.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นอินเดีย" lottoflag="./images/icon/in.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นอียิปต์" lottoflag="./images/icon/eg.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นฮั่งเส็งรอบบ่าย" lottoflag="./images/icon/hk.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นฮั่งเส็งรอบเช้า" lottoflag="./images/icon/hk.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นเกาหลี" lottoflag="./images/icon/kr.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นเยอรมัน" lottoflag="./images/icon/de.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
                <Lotto lottosubname="หวยหุ้นไต้หวัน" lottoflag="./images/icon/tw.svg" up3="XXX" down2="XX"  lottodate="01-Feb-2023"></Lotto>
              </div>
            </div>
          </div>

          <div className="bgwhitealpha shadow-sm rounded p-2 xtarget" id="yeekee">
								<h6><img src = "./images/icon/flag-yeekee.svg" alt="" className="height20" /> จับยี่กี VIP 
                <span className="badge badge-danger">22-Jan-2023</span></h6>


          <div className="">
						<div className="row px-0 m-0">
              <Yeekee round="1" up="XXX" down="XX"></Yeekee>
              <Yeekee round="2" up="XXX" down="XX"></Yeekee>
              <Yeekee round="3" up="XXX" down="XX"></Yeekee>
              <Yeekee round="4" up="XXX" down="XX"></Yeekee>
              <Yeekee round="5" up="XXX" down="XX"></Yeekee>
              <Yeekee round="6" up="XXX" down="XX"></Yeekee>
              <Yeekee round="7" up="XXX" down="XX"></Yeekee>
              <Yeekee round="8" up="XXX" down="XX"></Yeekee>
              <Yeekee round="9" up="XXX" down="XX"></Yeekee>
              <Yeekee round="10" up="XXX" down="XX"></Yeekee>
              <Yeekee round="11" up="XXX" down="XX"></Yeekee>
              <Yeekee round="12" up="XXX" down="XX"></Yeekee>
              <Yeekee round="13" up="XXX" down="XX"></Yeekee>
              <Yeekee round="14" up="XXX" down="XX"></Yeekee>
              <Yeekee round="15" up="XXX" down="XX"></Yeekee>
              <Yeekee round="16" up="XXX" down="XX"></Yeekee>
              <Yeekee round="17" up="XXX" down="XX"></Yeekee>
              <Yeekee round="18" up="XXX" down="XX"></Yeekee>
              <Yeekee round="19" up="XXX" down="XX"></Yeekee>
              <Yeekee round="20" up="XXX" down="XX"></Yeekee>
              <Yeekee round="21" up="XXX" down="XX"></Yeekee>
              <Yeekee round="22" up="XXX" down="XX"></Yeekee>
              <Yeekee round="23" up="XXX" down="XX"></Yeekee>
              <Yeekee round="24" up="XXX" down="XX"></Yeekee>
              <Yeekee round="25" up="XXX" down="XX"></Yeekee>
              <Yeekee round="26" up="XXX" down="XX"></Yeekee>
              <Yeekee round="27" up="XXX" down="XX"></Yeekee>
              <Yeekee round="28" up="XXX" down="XX"></Yeekee>
              <Yeekee round="29" up="XXX" down="XX"></Yeekee>
              <Yeekee round="30" up="XXX" down="XX"></Yeekee>
              <Yeekee round="41" up="XXX" down="XX"></Yeekee>
              <Yeekee round="42" up="XXX" down="XX"></Yeekee>
              <Yeekee round="43" up="XXX" down="XX"></Yeekee>
              <Yeekee round="44" up="XXX" down="XX"></Yeekee>
              <Yeekee round="45" up="XXX" down="XX"></Yeekee>
              <Yeekee round="46" up="XXX" down="XX"></Yeekee>
              <Yeekee round="47" up="XXX" down="XX"></Yeekee>
              <Yeekee round="48" up="XXX" down="XX"></Yeekee>
              <Yeekee round="49" up="XXX" down="XX"></Yeekee>
              <Yeekee round="50" up="XXX" down="XX"></Yeekee>
              <Yeekee round="51" up="XXX" down="XX"></Yeekee>
              <Yeekee round="52" up="XXX" down="XX"></Yeekee>
              <Yeekee round="53" up="XXX" down="XX"></Yeekee>
              <Yeekee round="54" up="XXX" down="XX"></Yeekee>
              <Yeekee round="55" up="XXX" down="XX"></Yeekee>
              <Yeekee round="56" up="XXX" down="XX"></Yeekee>
              <Yeekee round="57" up="XXX" down="XX"></Yeekee>
              <Yeekee round="58" up="XXX" down="XX"></Yeekee>
              <Yeekee round="59" up="XXX" down="XX"></Yeekee>
              <Yeekee round="60" up="XXX" down="XX"></Yeekee>
              <Yeekee round="61" up="XXX" down="XX"></Yeekee>
              <Yeekee round="62" up="XXX" down="XX"></Yeekee>
              <Yeekee round="63" up="XXX" down="XX"></Yeekee>
              <Yeekee round="64" up="XXX" down="XX"></Yeekee>
              <Yeekee round="65" up="XXX" down="XX"></Yeekee>
              <Yeekee round="66" up="XXX" down="XX"></Yeekee>
              <Yeekee round="67" up="XXX" down="XX"></Yeekee>
              <Yeekee round="68" up="XXX" down="XX"></Yeekee>
              <Yeekee round="69" up="XXX" down="XX"></Yeekee>
              <Yeekee round="70" up="XXX" down="XX"></Yeekee>
              <Yeekee round="71" up="XXX" down="XX"></Yeekee>
              <Yeekee round="72" up="XXX" down="XX"></Yeekee>
              <Yeekee round="73" up="XXX" down="XX"></Yeekee>
              <Yeekee round="74" up="XXX" down="XX"></Yeekee>
              <Yeekee round="75" up="XXX" down="XX"></Yeekee>
              <Yeekee round="76" up="XXX" down="XX"></Yeekee>
              <Yeekee round="77" up="XXX" down="XX"></Yeekee>
              <Yeekee round="78" up="XXX" down="XX"></Yeekee>
              <Yeekee round="79" up="XXX" down="XX"></Yeekee>
              <Yeekee round="80" up="XXX" down="XX"></Yeekee>
              <Yeekee round="81" up="XXX" down="XX"></Yeekee>
              <Yeekee round="82" up="XXX" down="XX"></Yeekee>
              <Yeekee round="83" up="XXX" down="XX"></Yeekee>
              <Yeekee round="84" up="XXX" down="XX"></Yeekee>
              <Yeekee round="85" up="XXX" down="XX"></Yeekee>
              <Yeekee round="86" up="XXX" down="XX"></Yeekee>
              <Yeekee round="87" up="XXX" down="XX"></Yeekee>
              <Yeekee round="88" up="XXX" down="XX"></Yeekee>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
