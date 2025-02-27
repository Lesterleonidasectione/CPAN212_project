const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-intro">
        We offer a variety of services to support you and your baby on the
        baby-led weaning journey. Explore our offerings below:
      </p>
      <div className="services-list">
        <div className="service-card">
          <h2>Baby-Led Weaning Workshops</h2>
          <p>
            Join our interactive workshops to learn the basics of baby-led
            weaning, including safety tips, food preparation, and how to
            introduce solids to your baby.
          </p>
        </div>
        <div className="service-card">
          <h2>One-on-One Coaching</h2>
          <p>
            Get personalized guidance from our experts tailored to your baby's
            needs. Perfect for parents who want individual support.
          </p>
        </div>
        <div className="service-card">
          <h2>Online Resources & Guides</h2>
          <p>
            Access our library of articles, videos, and printable guides to help
            you navigate baby-led weaning at your own pace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;