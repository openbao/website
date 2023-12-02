import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HTMLAttributes } from 'react'

type IconProps = {
    icon: IconDefinition,
    className?: string,
    style?: HTMLAttributes<HTMLDivElement>['style'],
}
export default function Icon({ icon, style, className }: IconProps) {
    return (
        <div style={{
            width:"20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...(style || {})
        }}
        className={className || ""}
        >
            <FontAwesomeIcon width={20} height={20} icon={icon} />
        </div>
    )
}