 import React from 'react';
import SushiNewsletter from './pages/SushiNewsletter';
import './styles/Menu.css'

function Menus() {
  return (
    <div className='menus'>
      <div className="hero">
        <h1>our menus</h1>
      </div>

    {/* menu non img */}
      <section className="menu-non-img">
        <div className="container">
          <h2 className="menu-title">
          JAPANESE TAPAS
          </h2>
          {/* menu */}
          <div className="menu">
            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Addictive Cabbage 
                  <span className='line'></span>
                    $7
                </h3>
                <h3 className='meal-japanese-name'>やみつきキャベツ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Smelt
                  <span className='line'></span>
                    $8
                </h3>
                <h3 className='meal-japanese-name'>ししゃもの素揚げ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Shishitou pepper 
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>ししとうの素揚げ</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Thick Fried Tofu 
                  <span className='line'></span>
                    $10
                </h3>
                <h3 className='meal-japanese-name'>Thick Fried Tofu </h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Oyster
                  <span className='line'></span>
                    $10
                </h3>
                <h3 className='meal-japanese-name'>カキフライ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Lotus Roots
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>揚げレンコン餃子</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Edamame
                  <span className='line'></span>
                    $7
                </h3>
                <h3 className='meal-japanese-name'>枝豆</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Miso Soup
                  <span className='line'></span>
                    $5
                </h3>
                <h3 className='meal-japanese-name'>味噌汁</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Addictive Cucumber
                  <span className='line'></span>
                    $7
                </h3>
                <h3 className='meal-japanese-name'>やみつきキュウリ</h3>
              </li>
            </ul>
          </div>
        </div>
      </section> 

    {/* menu with img */}
      <section className="menu-with-img">
        <div className="container">

          {/* img */}
          <div className="col flex-1">
            <img className='menu-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/insung-yoon-S14EkQbYVnQ-unsplash.jpg" alt="meal" />
          </div>

          {/* menu */}
          <div className="col flex-2">
            <div className="menu">
              <h2 className="menu-title">POPULAR SASHIMI</h2>
              <ul className="menu-list">
                <li className='menu-item'>
                  <h3 className='meal-name'>Salmon Sashimi 
                    <span className='line'></span>
                      $33
                  </h3>
                  <h3 className='meal-japanese-name'>サーモンのお刺身</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Scallop Sashimi
                    <span className='line'></span>
                      $38
                  </h3>
                  <h3 className='meal-japanese-name'>ホタテのお刺身</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Yellow Tail Sashimi
                    <span className='line'></span>
                      $25
                  </h3>
                  <h3 className='meal-japanese-name'>ハマチのお刺身</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Spanish Mackerel Sashimi
                    <span className='line'></span>
                      $22
                  </h3>
                  <h3 className='meal-japanese-name'>サワラのお刺身</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> 

    {/* menu non img */}
      <section className="menu-non-img">
        <div className="container">
          <h2 className="menu-title">
          APPETIZER
          </h2>
          {/* menu */}
          <div className="menu">
            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Tuna Yukke 
                  <span className='line'></span>
                    $18
                </h3>
                <h3 className='meal-japanese-name'>まぐろユッケ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Smelt
                  <span className='line'></span>
                    $8
                </h3>
                <h3 className='meal-japanese-name'>ししゃもの素揚げ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Shishitou pepper 
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>ししとうの素揚げ</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Grilled Mackerel
                  <span className='line'></span>
                    $15
                </h3>
                <h3 className='meal-japanese-name'>サバの塩焼き</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Oyster
                  <span className='line'></span>
                    $10
                </h3>
                <h3 className='meal-japanese-name'>カキフライ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Lotus Roots
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>揚げレンコン餃子</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Sake Steamed Clams
                  <span className='line'></span>
                    $16
                </h3>
                <h3 className='meal-japanese-name'>アサリの酒蒸し</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Miso Soup
                  <span className='line'></span>
                    $5
                </h3>
                <h3 className='meal-japanese-name'>味噌汁</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Addictive Cucumber
                  <span className='line'></span>
                    $7
                </h3>
                <h3 className='meal-japanese-name'>やみつきキュウリ</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* menu with img */}
      <section className="menu-with-img">
        <div className="container">
          {/* menu */}
          <div className="col flex-2">
            <div className="menu">
              <h2 className="menu-title">SEASONAL SPECIALS</h2>
              <ul className="menu-list">
                <li className='menu-item'>
                  <h3 className='meal-name'>Mushroom Butter Fried Rice 
                    <span className='line'></span>
                      $15
                  </h3>
                  <h3 className='meal-japanese-name'>キノコたっぷりバターガーリックライス</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Sake Clams Vongole Ramen
                    <span className='line'></span>
                      $22
                  </h3>
                  <h3 className='meal-japanese-name'>酒とアサリのボンゴレラースパ</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Spaghetti with Parmigiano
                    <span className='line'></span>
                      $18
                  </h3>
                  <h3 className='meal-japanese-name'>明太子クリームラースパ</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Tofu and Sesame Hot Pot
                    <span className='line'></span>
                      $16
                  </h3>
                  <h3 className='meal-japanese-name'>豆乳鍋</h3>
                </li>
              </ul>
            </div>
          </div>

          {/* img */}
          <div className="col flex-1">
            <img className='menu-img' src="https://patiotime.loftocean.com/demo5/wp-content/uploads/sites/8/2022/05/moiz-k-malik-RAVnYBC-pug-unsplash.jpg" alt="meal" />
          </div>
        </div>
      </section> 
      
      {/* menu non img */}
      <section className="menu-non-img">
        <div className="container">
          <h2 className="menu-title">
            NIGIRI SUSHI
          </h2>
          {/* menu */}
          <div className="menu">
            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Salmon Nigiri
                  <span className='line'></span>
                    $12
                </h3>
                <h3 className='meal-japanese-name'>サーモン握り</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Smelt
                  <span className='line'></span>
                    $8
                </h3>
                <h3 className='meal-japanese-name'>ししゃもの素揚げ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Shishitou pepper 
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>ししとうの素揚げ</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Grilled Eggplant
                  <span className='line'></span>
                    $15
                </h3>
                <h3 className='meal-japanese-name'>ナス田楽</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Oyster
                  <span className='line'></span>
                    $10
                </h3>
                <h3 className='meal-japanese-name'>カキフライ</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Fried Lotus Roots
                  <span className='line'></span>
                    $9
                </h3>
                <h3 className='meal-japanese-name'>揚げレンコン餃子</h3>
              </li>
            </ul>

            <ul className="menu-list">
              <li className='menu-item'>
                <h3 className='meal-name'>Salmon Roe Gunkan
                  <span className='line'></span>
                    $12
                </h3>
                <h3 className='meal-japanese-name'>イクラ軍艦巻き</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Miso Soup
                  <span className='line'></span>
                    $5
                </h3>
                <h3 className='meal-japanese-name'>味噌汁</h3>
              </li>
              <li className='menu-item'>
                <h3 className='meal-name'>Addictive Cucumber
                  <span className='line'></span>
                    $7
                </h3>
                <h3 className='meal-japanese-name'>やみつきキュウリ</h3>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* menu with img */}
      <section className="menu-with-img">
        <div className="container">

          {/* img */}
          <div className="col flex-1">
            <img className='menu-img' src="https://playboyrussia.com/images/cache/2022/3/10/fit_960_530_false_crop_5760_3240_0_0_q90_861301_a9c7ef4778f73d49fa8f231c4.webp" alt="meal" />
          </div>

          {/* menu */}
          <div className="col flex-2">
            <div className="menu">
              <h2 className="menu-title">SELECTED SAKE</h2>
              <div className="price-headings">
                <h5 className='gls'>GLS</h5>
                <h5 className='btl'>BTL</h5>
              </div>
              <ul className="menu-list">
                <li className='menu-item'>
                  <h3 className='meal-name'>Brooklyn Kura 
                    <span className='line'></span>
                    <div className="prices">
                      <span className="price-gls"> $16</span>
                      <span className="price-btl">$64</span> 
                    </div>
                  </h3>
                  <h3 className='meal-japanese-name'>ブルックリン蔵</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Akishika
                    <span className='line'></span>
                    <div className="prices">
                      <span className="price-gls"> $19</span>
                      <span className="price-btl">$79</span>  
                    </div> 
                  </h3>
                  <h3 className='meal-japanese-name'>秋鹿</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Kaze no Mori
                    <span className='line'></span>
                    <div className="prices">
                      <span className="price-gls"> $16</span>
                      <span className="price-btl">$64</span> 
                    </div>
                  </h3>
                  <h3 className='meal-japanese-name'>風の森</h3>
                </li>
                <li className='menu-item'>
                  <h3 className='meal-name'>Phoenix
                    <span className='line'></span>
                    <div className="prices">
                      <span className="price-gls"> $18</span>
                      <span className="price-btl">$72</span> 
                    </div>
                  </h3>
                  <h3 className='meal-japanese-name'>フェニックス</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> 

      <SushiNewsletter />
    </div>
  )
}

export default Menus