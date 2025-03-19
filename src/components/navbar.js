import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* Your logo or site name */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">Accueil</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="faculteDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Faculté
              </a>
              <ul className="dropdown-menu" aria-labelledby="faculteDropdown">
                <li><Link className="dropdown-item" to="/about/mot-du-doyen">Mot du Doyen</Link></li>
                <li><Link className="dropdown-item" to="/about/historique">Historique</Link></li>
                <li><Link className="dropdown-item" to="/about/chiffres">La FSK en chiffre</Link></li>
                <li><Link className="dropdown-item" to="/about/reglements">Règlements et Politiques</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="etudiantsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaGraduationCap /> Étudiants
              </a>
              <ul className="dropdown-menu" aria-labelledby="etudiantsDropdown">
                <li><Link className="dropdown-item" to="/etudiants/licence">Licence</Link></li>
                <li><Link className="dropdown-item" to="/etudiants/master">Master</Link></li>
                <li><Link className="dropdown-item" to="/etudiants/doctorat">Doctorat</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/etudiants/bourses">Bourses</Link></li>
                <li><Link className="dropdown-item" to="/etudiants/logement">Logement</Link></li>
                <li><Link className="dropdown-item" to="/etudiants/accessibilite">Accessibilité</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="formationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Formation
              </a>
              <ul className="dropdown-menu" aria-labelledby="formationDropdown">
                <li><Link className="dropdown-item" to="/formation/licence">Licence</Link></li>
                <li><Link className="dropdown-item" to="/formation/master">Master</Link></li>
                <li><Link className="dropdown-item" to="/formation/doctorat">Doctorat</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/formation/programmes">Programmes</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="rechercheDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recherche
              </a>
              <ul className="dropdown-menu" aria-labelledby="rechercheDropdown">
                <li><Link className="dropdown-item" to="/recherche/laboratoires">Laboratoires</Link></li>
                <li><Link className="dropdown-item" to="/recherche/publications">Publications</Link></li>
                <li><Link className="dropdown-item" to="/recherche/documents">Documents</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="actualitesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Actualités
              </a>
              <ul className="dropdown-menu" aria-labelledby="actualitesDropdown">
                <li><Link className="dropdown-item" to="/actualites">Toutes les actualités</Link></li>
                <li><Link className="dropdown-item" to="/actualites/all-files">Archives</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/evenements">Événements</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 