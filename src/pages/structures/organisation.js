import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fskColors from "../../utils/colors"

const OrganisationPage = () => {
  const [activeNode, setActiveNode] = React.useState(null);
  const svgRef = React.useRef(null);

  React.useEffect(() => {
    // Add D3 script dynamically
    const d3Script = document.createElement('script');
    d3Script.src = 'https://d3js.org/d3.v7.min.js';
    d3Script.async = true;
    d3Script.onload = initializeOrgChart;
    document.body.appendChild(d3Script);

    return () => {
      document.body.removeChild(d3Script);
    };
  }, []);

  const initializeOrgChart = () => {
    if (!window.d3) {
      console.error("D3 not loaded");
      return;
    }

    const d3 = window.d3;
    
    // Clear any existing chart
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Data structure for the org chart - flattened to only show main nodes
    const data = {
      name: "Pr. EBN TOUHAMI Mohamed",
      title: "Doyen",
      icon: "university",
      color: "#003366",
      image: "https://fs.uit.ac.ma/wp-content/uploads/2019/12/MG_3882-1339x1536.jpg",
      children: [
        {
          name: "Pr. EL WAHBI Bouazza",
          title: "Vice Doyen chargé des affaires pédagogiques",
          icon: "chalkboard-teacher",
          color: "#0056b3",
          services: [
            { 
              name: "Service", 
              title: "Service des affaires scolarité et estudiantines",
              icon: "user-graduate", 
              color: "#4d94ff"
            },
            { 
              name: "Service", 
              title: "Prévisions, statistiques et suivi des Lauréats",
              icon: "chart-line", 
              color: "#4d94ff"
            }
          ]
        },
        {
          name: "Pr. CHAKIRI Saïd",
          title: "Vice-doyen de la recherche scientifique et de la coopération",
          icon: "flask",
          color: "#0056b3",
          services: [
            { 
              name: "Service", 
              title: "Service de coopération, de partenariat et de formation",
              icon: "handshake", 
              color: "#4d94ff"
            },
            { 
              name: "Service", 
              title: "Service de Recherche scientifique et Doctorat",
              icon: "microscope", 
              color: "#4d94ff"
            },
            { 
              name: "Service", 
              title: "Service formation continue",
              icon: "chalkboard-teacher", 
              color: "#4d94ff"
            }
          ]
        },
        {
          name: "",
          title: "Secrétaire Générale",
          icon: "briefcase",
          color: "#0056b3",
          services: [
            { 
              name: "Service", 
              title: "Service Informatique",
              icon: "laptop", 
              color: "#4d94ff"
            },
            { 
              name: "Service", 
              title: "Service des ressources humaines et des affaires institutionnelles",
              icon: "users", 
              color: "#4d94ff"
            },
            { 
              name: "Service", 
              title: "Service Patrimoine et logistique",
              icon: "warehouse", 
              color: "#4d94ff"
            }
          ]
        },
        {
          name: "Responsable",
          title: "Vice Doyen Centre d'Excellence Automobile",
          shortTitle: "Centre Automobile",
          icon: "car",
          color: "#0056b3"
        },
        {
          name: "Responsable",
          title: "Vice Doyen Centre d'Excellence Agroalimentaire",
          shortTitle: "Centre Agroalimentaire",
          icon: "seedling",
          color: "#0056b3"
        },
        {
          name: "Service",
          title: "Secrétariat de Mr le Doyen et bureau d'ordre",
          shortTitle: "Secrétariat & Bureau d'ordre",
          icon: "envelope",
          color: "#28a745"
        },
        {
          name: "Service",
          title: "Service Affaires économiques",
          shortTitle: "Affaires économiques",
          icon: "money-bill-wave",
          color: "#28a745"
        }
      ]
    };
    
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight || 600;
    
    // Create a zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        svg.attr("transform", event.transform);
      });
    
    // Apply zoom behavior to the SVG
    const svgRoot = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .call(zoom);
    
    // Set up the visualization with a group that can be zoomed
    const svg = svgRoot.append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
    
    // Define the radial layout with more space
    const radius = Math.min(width, height) / 2 - 100;
    
    // For a cleaner layout, we'll position the main elements below the center in a semi-circle
    const mainNodes = data.children.map((child, i) => {
      // Position nodes in a semi-circle below the Doyen
      // Shift the entire layout by 90 degrees (π/2) so that nodes appear below instead of to the sides
      const totalChildren = data.children.length;
      // Use a smaller angle span for better spacing (120 degrees = 2π/3)
      const angleSpan = (2 * Math.PI) / 3;
      // Start from the center and spread nodes evenly below
      const startAngle = Math.PI - angleSpan / 2;
      const angle = startAngle + (i * angleSpan / (totalChildren - 1));
      
      // Use a larger radius to space out the nodes more
      return {
        data: child,
        x: angle,
        y: radius * 0.8
      };
    });
    
    // Create a group for all links
    const linkGroup = svg.append("g").attr("class", "links");
    
    // Draw links from center to each main node
    mainNodes.forEach(node => {
      // Create a unique gradient ID
      const gradientId = `link-gradient-doyen-${node.data.name.replace(/\s+/g, '')}`;
      
      // Create a linear gradient
      const gradient = svgRoot.append("defs")
        .append("linearGradient")
        .attr("id", gradientId)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", Math.cos(node.x - Math.PI / 2) * node.y)
        .attr("y2", Math.sin(node.x - Math.PI / 2) * node.y);
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", data.color);
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", node.data.color);
      
      // Draw the link with the gradient
      linkGroup.append("path")
        .attr("d", `M0,0 L${Math.cos(node.x - Math.PI / 2) * node.y},${Math.sin(node.x - Math.PI / 2) * node.y}`)
        .attr("stroke", `url(#${gradientId})`)
        .attr("stroke-width", 2.5)
        .attr("fill", "none")
        .attr("stroke-opacity", 0.7);
    });
    
    // Create a group for all nodes
    const nodeGroup = svg.append("g").attr("class", "nodes");
    
    // Add Doyen node at center with image
    const centerNode = nodeGroup.append("g")
      .attr("class", "node-group doyen-node")
      .style("cursor", "pointer")
      .on("click", () => {
        // Highlight the central node
        d3.selectAll(".node-circle").attr("stroke-width", 2);
        d3.select(".doyen-node .node-circle").attr("stroke-width", 4);
        
        // Set active node to the root
        setActiveNode(data);
      });
    
    // Add circle background for center node
    centerNode.append("circle")
      .attr("class", "node-circle")
      .attr("r", 50)
      .attr("fill", data.color)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .style("filter", "drop-shadow(0px 3px 8px rgba(0,0,0,0.3))");
    
    // Create a clip path for the image
    const clipId = "doyen-clip";
    svgRoot.append("defs")
      .append("clipPath")
      .attr("id", clipId)
      .append("circle")
      .attr("r", 46);
    
    // Add the Doyen's image
    centerNode.append("image")
      .attr("xlink:href", data.image)
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", -50)
      .attr("y", -50)
      .attr("clip-path", `url(#${clipId})`)
      .style("opacity", 0)  // Start with opacity 0
      .transition()         // Fade in effect
      .duration(700)
      .style("opacity", 1);
    
    // Add a decorative ring around the center node
    centerNode.append("circle")
      .attr("r", 58)
      .attr("fill", "none")
      .attr("stroke", data.color)
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "3,3")
      .style("opacity", 0.8);
    
    // Add outer glow
    centerNode.append("circle")
      .attr("r", 65)
      .attr("fill", "none")
      .attr("stroke", "rgba(255, 255, 255, 0.2)")
      .attr("stroke-width", 10)
      .style("filter", "blur(10px)");
    
    // Add the title above the center node (moved up)
    centerNode.append("text")
      .attr("dy", -75)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", data.color)
      .text("Doyen");
    
    // Add the name above the title
    centerNode.append("text")
      .attr("dy", -55)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "#333")
      .text(data.name);
    
    // Add the main nodes around the center
    const mainNodeGroup = nodeGroup.selectAll(".main-node")
      .data(mainNodes)
      .join("g")
      .attr("class", "node-group main-node")
      .attr("transform", d => `
        rotate(${(d.x * 180 / Math.PI - 90)})
        translate(${d.y},0)
        rotate(${(d.x >= Math.PI) ? 180 : 0})
      `)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation(); // Prevent triggering zoom when clicking a node
        setActiveNode(d.data);
        
        // Highlight the selected node
        d3.selectAll(".node-circle").attr("stroke-width", 2);
        d3.select(event.currentTarget).select(".node-circle").attr("stroke-width", 4);
        
        // Pulse animation for the selected node
        d3.select(event.currentTarget).select(".node-circle")
          .transition()
          .duration(300)
          .attr("r", 32)
          .transition()
          .duration(300)
          .attr("r", 28);
      });
    
    // Add colored circles to main nodes
    mainNodeGroup.append("circle")
      .attr("class", "node-circle")
      .attr("r", 28)
      .attr("fill", d => d.data.color)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(0px 3px 5px rgba(0,0,0,0.2))");
    
    // Add icons to the main nodes
    mainNodeGroup.append("g")
      .each(function(d) {
        const g = d3.select(this);
        // Create a text element for the icon
        g.append("text")
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "central")
          .attr("fill", "white")
          .attr("font-family", "'Font Awesome 5 Free'")
          .attr("font-weight", 900)
          .attr("font-size", "14px")
          .text(getFontAwesomeUnicode(d.data.icon));
      });
    
    // Add the main node labels - positioned differently based on node position
    mainNodeGroup.each(function(d) {
      const g = d3.select(this);
      const isRight = d.x < Math.PI;
      
      // Create label group with appropriate positioning
      const labelGroup = g.append("g")
        .attr("transform", `translate(${isRight ? 35 : -35}, 0)`);
      
      // Primary label (name)
      labelGroup.append("text")
        .attr("text-anchor", isRight ? "start" : "end")
        .attr("dy", "-0.5em")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .text(d.data.name);
      
      // Secondary label (title)
      labelGroup.append("text")
        .attr("text-anchor", isRight ? "start" : "end")
        .attr("dy", "1em")
        .attr("font-size", "12px")
        .attr("fill", "#666")
        .text(d.data.shortTitle || d.data.title);
    });
    
    // Initialize the active node to the root
    setActiveNode(data);
  };
  
  // Helper function to get FontAwesome Unicode characters
  const getFontAwesomeUnicode = (iconName) => {
    const iconMap = {
      'university': '\uf19c',
      'book': '\uf02d',
      'flask': '\uf0c3',
      'briefcase': '\uf0b1',
      'car': '\uf1b9',
      'seedling': '\uf4d8',
      'envelope': '\uf0e0',
      'money-bill-wave': '\uf53a',
      'user-graduate': '\uf501',
      'chart-line': '\uf201',
      'handshake': '\uf2b5',
      'microscope': '\uf610',
      'chalkboard-teacher': '\uf51c',
      'laptop': '\uf109',
      'users': '\uf0c0',
      'warehouse': '\uf494',
      'info': '\uf129',
      'circle': '\uf111'
    };
    
    return iconMap[iconName] || iconMap.circle;
  };

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h1 className="display-4 mb-4 text-primary">Organisation générale</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/structures">Structures</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Organisation générale</li>
              </ol>
            </nav>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <p className="lead mb-4">
                  La Faculté des Sciences est organisée en plusieurs structures administratives et pédagogiques 
                  qui assurent son bon fonctionnement et la qualité de ses formations.
                </p>
                
                <h2 className="h3 text-primary mt-4 mb-4 text-center">Organigramme de la Faculté des Sciences</h2>
                
                <div className="row">
                  <div className="col-md-8">
                    <div className="mindmap-container position-relative" style={{ height: "600px", width: "100%", overflow: "hidden", border: "1px solid #eee" }}>
                      <svg ref={svgRef} width="100%" height="600"></svg>
                      <div className="mindmap-controls">
                        <button 
                          className="btn btn-sm btn-light" 
                          onClick={() => {
                            const d3 = window.d3;
                            if (d3) {
                              d3.select(svgRef.current)
                                .transition()
                                .duration(750)
                                .call(d3.zoom().transform, d3.zoomIdentity);
                            }
                          }}
                          title="Réinitialiser le zoom"
                        >
                          <FontAwesomeIcon icon="sync-alt" />
                        </button>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <small className="text-muted">
                        <FontAwesomeIcon icon="mouse-pointer" className="me-1" /> Cliquez sur un nœud pour afficher les détails
                        &nbsp;&nbsp;•&nbsp;&nbsp;
                        <FontAwesomeIcon icon="search" className="me-1" /> Utilisez la molette pour zoomer
                      </small>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    {activeNode && (
                      <div className="card border-0 shadow-sm h-100">
                        <div 
                          className="card-header py-3" 
                          style={{ 
                            backgroundColor: activeNode.color,
                            color: 'white' 
                          }}
                        >
                          <div className="d-flex align-items-center">
                            <div 
                              className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                              style={{ 
                                width: "40px", 
                                height: "40px", 
                                backgroundColor: "rgba(255,255,255,0.2)",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                              }}
                            >
                              <FontAwesomeIcon icon={activeNode.icon || "info"} size="lg" />
                            </div>
                            <div>
                              <span className="small text-white-50 d-block" style={{ opacity: 0.8 }}>
                                {activeNode.name === "Service" || activeNode.name === "Responsable" 
                                  ? "Département" 
                                  : "Personnel"
                                }
                              </span>
                              <h3 className="h5 mb-0">{activeNode.title}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {activeNode.name !== "Service" && activeNode.name !== "Responsable" && (
                            <div className="mb-3 pb-3 border-bottom">
                              <h4 className="h6 mb-1">Responsable</h4>
                              <p className="mb-0 font-weight-bold">{activeNode.name}</p>
                            </div>
                          )}
                          
                          {activeNode.services && activeNode.services.length > 0 && (
                            <>
                              <h5 className="h6 mb-3">Services et responsabilités:</h5>
                              <ul className="list-group list-group-flush">
                                {activeNode.services.map((service, index) => (
                                  <li key={index} className="list-group-item d-flex align-items-center px-0">
                                    <div 
                                      className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                                      style={{ 
                                        width: "36px", 
                                        height: "36px", 
                                        backgroundColor: service.color || "#4d94ff",
                                        color: "white",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                      }}
                                    >
                                      <FontAwesomeIcon icon={service.icon || "circle"} size="sm" />
                                    </div>
                                    <div>
                                      <span className="small">{service.title}</span>
                                      {service.name !== "Service" && service.name !== "Responsable" && (
                                        <small className="d-block text-muted">{service.name}</small>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          
                          {activeNode.children && activeNode.children.length > 0 && (
                            <>
                              <h5 className="h6 mb-3">Département dirigé:</h5>
                              <ul className="list-group list-group-flush">
                                {activeNode.children.map((child, index) => (
                                  <li key={index} className="list-group-item d-flex align-items-center px-0">
                                    <div 
                                      className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                                      style={{ 
                                        width: "36px", 
                                        height: "36px", 
                                        backgroundColor: child.color || "#0056b3",
                                        color: "white",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                      }}
                                    >
                                      <FontAwesomeIcon icon={child.icon || "circle"} size="sm" />
                                    </div>
                                    <div>
                                      <span className="small">{child.title}</span>
                                      {child.name !== "Service" && child.name !== "Responsable" && (
                                        <small className="d-block text-muted">{child.name}</small>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          
                          {activeNode.title === "Doyen" && (
                            <div className="alert alert-info mt-3 small">
                              <FontAwesomeIcon icon="info-circle" className="me-2" />
                              Le Doyen est le premier responsable de l'établissement universitaire, 
                              chargé de la gestion académique, administrative et financière.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="alert alert-info mt-4">
                  <p className="mb-0">
                    <strong>Note:</strong> Cette organisation peut évoluer en fonction des besoins de la faculté 
                    et des orientations stratégiques de l'université.
                  </p>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-muted small">
                    Cliquez sur les différents nœuds de l'organigramme pour afficher plus de détails.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/structures" className="btn btn-outline-primary">
                <FontAwesomeIcon icon="arrow-left" className="me-2" />
                Retour aux structures
              </Link>
              <Link to="/structures/departements" className="btn btn-primary">
                Voir les départements
                <FontAwesomeIcon icon="arrow-right" className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mindmap-container {
          background: #fafafa;
          border-radius: 10px;
          position: relative;
        }
        
        .mindmap-controls {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 100;
        }
        
        @media (max-width: 768px) {
          .mindmap-container {
            height: 450px !important;
          }
        }
        
        /* Animation for nodes */
        .node-group {
          transition: all 0.3s ease;
        }
        
        .node-group:hover .node-circle {
          filter: brightness(1.1);
          stroke-width: 3px;
          transform: scale(1.05);
        }
        
        .node-circle {
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Organisation générale | Faculté des Sciences" 
  description="Découvrez l'organisation générale et l'organigramme de la Faculté des Sciences sous forme de mindmap interactif"
/>

export default OrganisationPage 