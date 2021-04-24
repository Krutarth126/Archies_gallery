import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const ContactUS = () => {
  return (
    <>
      <div className="contact ">
        <h1 id="contact">Contact Us</h1>
        <div className="row">
          <div class="col-12 col-sm-6">
            <p>
              <span> Contact No:-7987776425</span>
              <br />
              <span>
                Address:- 23/217, Shuklabada, Khaparganj, Bilaspur(C.G.)
              </span>
              <br />
              <a href="https://wa.me/+917987776245/?text=Hi" target="_blank">
                <WhatsAppIcon className="icon" style={{ fontSize: 50 }} />
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.5496645087267!2d82.1541699630494!3d22.084023278590795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1205f253ad%3A0xd7a9dd6eb6d87318!2sKhaparganj%20School%20Rd%2C%20Gol%20Bazar%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1618747373460!5m2!1sen!2sin"
              width="300"
              height="250"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              className="ml-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
