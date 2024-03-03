import React from 'react'

function Footer() {
  return (
    <>
     <div classNameName="footer">
            <h2 className='text-light'>Questions? call 000-000-000-000</h2>
            <div className="row">
                <div className="col">
                    <a href="#">FAQ</a><br />
                    <a href="#">Investor Relations</a><br />
                    <a href="#">Privacy</a><br />
                    <a href="#">Speed Test</a>

                </div>
                <div className="col">
                    <a href="#">Help Center </a><br />
                    <a href="#">Jobs</a><br />
                    <a href="#">Cookies Preferences</a><br />
                    <a href="#">Legal Notices</a><br />

                </div>
                <div className="col">
                    <a href="#">Accounts </a><br />
                    <a href="#">Ways to watch</a><br />
                    <a href="#">Corporate Informations</a><br />
                    <a href="#">Only on Netflix</a><br />

                </div>
                <div className="col">
                    <a href="#">Media Center </a><br />
                    <a href="#">Terms of Use</a><br />
                    <a href="#">Contacts Us</a><br />
                </div>
            </div>


 <select id="search_bar" className='btn bg-light m-5'>
            <option value="">English</option>
            <option value="">हिंदी</option>
        </select>
        <p className="copyright_text">Netflix India</p>
        </div>
       
    </>
  )
}

export default Footer