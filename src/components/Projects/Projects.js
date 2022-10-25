import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aeps from "../../Assets/Projects/aeps (2).png";
import Flight from "../../Assets/Projects/Flight.jpg";
import pl from "../../Assets/Projects/3rd Party Logistics Connector .png";
import Shopify from "../../Assets/Projects/Shopify Odoo Connector (Edition_ Odoo Community & Enterprise, Version_ 14.png";
import bbps from "../../Assets/Projects/bbos.jpg";
import WooCommerce from "../../Assets/Projects/WooCommerce Connector (Edition_ Odoo Community & Enterprise, Version_ 14.jfif";
import Back from "../../Assets/Projects/Background.png";

function Projects() {
    return (
        <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shopify}
              isBlog={false}
              title="Shopify Odoo Connector"
              description="Shopify is a famous cloud-based, multi-channel eCommerce platform designed for small and medium businesses. When a Shopify Seller uses Odoo as their backend ERP, the Shopify Odoo Connector is a must-have product for them. Using this connector, a seller can integrate Shopify Store with Odoo and manage different operations such as publishing products to Shopify, Importing Orders to odoo and much more. Automate all Shopify Odoo Integration operations to save good amount of time and efforts using this connector."/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WooCommerce}
              isBlog={false}
              title="Woocommerce Odoo Connector"
              description="Odoo WooCommerce Connector will help you integrate and manage your WooCommerce store in Odoo. Perform various operations like Importing Orders and Customer Data, Updating Inventory, Updating Order Status, Importing & Exporting Products, Product Categories, Product tags and much more."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pl}
              isBlog={false}
              title="3rd Party Logistics Connector"
              description="Third-party logistics (abbreviated as 3PL, or TPL) in logistics and supply chain management is an organization's use of third-party businesses to outsource elements of its distribution, warehousing, and fulfillment services."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aeps}
              isBlog={false}
              title="Aadhaar Enabled Payment System (AEPS)"
              description="Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking transactions like balance enquiry, cash withdrawal, remittances through a Business Correspondent."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bbps}
              isBlog={false}
              title="BBPS services"
              description="Bharat Bill Payment System (BBPS) is a RBI mandated system which offers integrated and interoperable bill payment services to customers across geographies with certainty, reliability and safety of transactions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flight}
              isBlog={false}
              title="Flight Booking System"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Back}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Projects;