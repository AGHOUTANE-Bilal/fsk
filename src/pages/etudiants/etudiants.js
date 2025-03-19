import React from "react";
import { navigate } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

// This component will redirect to the main etudiants page
const EtudiantsSubpage = () => {
  React.useEffect(() => {
    navigate("/etudiants");
  }, []);

  return (
    <Layout>
      <div className="container py-5">
        <p>Redirection vers la page étudiants...</p>
      </div>
    </Layout>
  );
};

export default EtudiantsSubpage;

export const Head = () => <Seo title="Étudiants | Faculté des Sciences de Kénitra" />

// Export as named export instead of default
export const EtudiantsPage = () => {
  return (
    <div>
      <h1>Liste des étudiants</h1>
      <p>Ici vous trouverez la liste de tous les étudiants.</p>
    </div>
  )
}

export const SecondComponent = () => {
  // ...
} 