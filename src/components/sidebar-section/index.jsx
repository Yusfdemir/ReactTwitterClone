import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
const SidebarSection = ({title,children,more}) => {
  return (
    <div>
        <section className='bg-[color:var(--background-primary)] overflow-hidden mb-4 rounded-2xl border border-[color:var(--background-primary)]'>
        <h5 className='py-3 px-4 text-xl font-bold flex items-center' >{title}</h5>
        </section>
        <div className='grid'>
            {children}
        </div>
        {more && (
            <Link to={more} className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">Daha fazla göster</Link>
        )}
    </div>
  )
}

SidebarSection.propTypes={
title:PropTypes.string.isRequired,
children:PropTypes.node.isRequired,
more:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}

SidebarSection.defaultProps={
    more:false
}
export default SidebarSection