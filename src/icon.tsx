interface IconProps {
    size?: number
}

export const Minimize = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12"
        >
            <rect fill="currentColor" width="10" height="1" x="1" y="6" />
        </svg>
    )
}

export const Maximize = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12"
        >
            <rect
                width="9"
                height="9"
                x="1.5"
                y="1.5"
                fill="none"
                stroke="currentColor"
            />
        </svg>
    )
}

export const Close = (props: IconProps) => {
    return (
        <svg
            aria-hidden="false"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12"
        >
            <polygon
                fill="currentColor"
                fill-rule="evenodd"
                points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
            />
        </svg>
    )
}

export const PinIcon = (props: IconProps) => {
    return (
        <svg
            data-icon="pin"
            width={props.size}
            height={props.size}
            role="img"
            viewBox="0 0 16 16"
        >
            <path
                d="M9.41.92c-.51.51-.41 1.5.15 2.56L4.34 7.54C2.8 6.48 1.45 6.05.92 6.58l3.54 3.54-3.54 4.95 4.95-3.54 3.54 3.54c.53-.53.1-1.88-.96-3.42l4.06-5.22c1.06.56 2.04.66 2.55.15L9.41.92z"
                fill-rule="evenodd"
            />
        </svg>
    )
}

export const CopyIcon = (props: IconProps) => {
    return (
        <svg
            data-icon="duplicate"
            width={props.size}
            height={props.size}
            role="img"
            viewBox="0 0 16 16"
        >
            <path
                d="M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z"
                fill-rule="evenodd"
            />
        </svg>
    )
}

export const GithubIcon = (props: IconProps) => {
    return (
        <svg
            data-icon="duplicate"
            width={props.size}
            height={props.size}
            role="img"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="52" cy="52" r="44" opacity=".35" />
            <circle cx="50" cy="50" r="44" fill="#f2f2f2" />
            <path
                fill="#707cc0"
                d="M50,12.5c-20.711,0-37.5,16.789-37.5,37.5S29.289,87.5,50,87.5S87.5,70.711,87.5,50 S70.711,12.5,50,12.5z"
            />
            <path
                fill="#f2f2f2"
                d="M60.161,83.936c0-1.122,0.042-4.813,0.042-9.389c0-3.192-1.095-5.281-2.324-6.338 c7.624-0.847,15.626-3.74,15.626-16.888c0-3.736-1.324-6.791-3.518-9.184c0.352-0.866,1.527-4.346-0.341-9.057 c0,0-2.868-0.92-9.402,3.508c-2.734-0.759-5.662-1.139-8.568-1.152c-2.91,0.013-5.838,0.393-8.568,1.152 c-6.538-4.429-9.411-3.508-9.411-3.508c-1.862,4.712-0.687,8.192-0.336,9.057c-2.189,2.393-3.523,5.448-3.523,9.184 c0,13.115,7.99,16.051,15.589,16.915c-0.978,0.856-1.862,2.364-2.173,4.575c-1.95,0.876-6.907,2.386-9.96-2.844 c0,0-1.808-3.285-5.242-3.527c0,0-3.342-0.043-0.235,2.08c0,0,2.244,1.053,3.8,5.006c0,0,2.009,6.656,11.529,4.588 c0.017,2.856,0.046,5.008,0.046,5.821c0,0.385-0.122,0.792-0.383,1.115C45.945,86.292,49.3,87,52.807,87 c2.981,0,5.853-0.509,8.576-1.417C60.502,85.37,60.161,84.613,60.161,83.936z"
            />
            <path
                fill="#40396e"
                d="M50,89c-21.505,0-39-17.495-39-39s17.495-39,39-39s39,17.495,39,39S71.505,89,50,89z M50,14 c-19.851,0-36,16.149-36,36s16.149,36,36,36s36-16.149,36-36S69.851,14,50,14z"
            />
        </svg>
    )
}

export const UpdateIcon = (props: IconProps) => {
    return (
        <svg
            data-icon="duplicate"
            width={props.size}
            height={props.size}
            role="img"
            baseProfile="basic"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="52" cy="52" r="44" opacity=".35" />
            <circle cx="50" cy="50" r="44" fill="#F2F2F2" />
            <circle
                cx="50"
                cy="50"
                r="37.5"
                fill="#96C362"
                stroke="#40396E"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
            />
            <path
                fill="#F2F2F2"
                d="M70.4495239,50.8300171h-3.3251953c-0.5819702,0-1.0632324,0.4519653-1.0997314,1.0328369 c-0.0667725,1.0457764-0.2342529,2.0646362-0.4927368,3.0469971c-1.8095703,6.8763428-8.0806885,11.9625244-15.5169678,11.9625244 c-1.1480713,0-2.2683105-0.1212158-3.3486938-0.3515015c-7.5625-1.6121826-13.1693115-8.5697632-12.6615601-16.7136841 c0.1278076-2.0496826,0.6498413-3.9981079,1.4894409-5.7714844c2.5186768-5.3200684,7.8947754-9.0646362,14.0533447-9.241394 c0.199585-0.0057373,0.3966675-0.0008545,0.5945435,0.0007935c0.5240479,0.0043945,1.0423584,0.0327759,1.5531006,0.0871582 c0.079834,0.0084839,0.1589966,0.0192261,0.2384644,0.0289307c0.5143433,0.0626221,1.0220337,0.1467285,1.5202026,0.2572632 c0.06604,0.0147095,0.1310425,0.0322266,0.1968384,0.0477295c0.5089111,0.119812,1.0103149,0.2598267,1.4995117,0.4268188 c0.0410767,0.0140381,0.0809937,0.0305176,0.1219482,0.0448608c0.5112305,0.1791992,1.0128174,0.3792114,1.4994507,0.6066895 l-2.1917114,3.288147c-0.1742554,0.2611084-0.1858521,0.5974121-0.0315552,0.8701172 c0.1482544,0.2600098,0.4243164,0.4199219,0.7219238,0.4199219c0.0133057,0,0.0276489,0,0.0420532-0.0011597l11.0636597-0.5531616 c0.0668945-0.0033569,0.1255493-0.03479,0.1884766-0.0535889c0.0567017-0.0169067,0.1182251-0.0198364,0.1697388-0.0482178 c0.1088867-0.0599365,0.2043457-0.1442871,0.2779541-0.2483521c0.1471558-0.2085571,0.1903076-0.4724121,0.1167603-0.7169189 l-3.3191528-11.0637207c-0.0923462-0.3075562-0.3545532-0.5343628-0.6721191-0.5819092 c-0.0001831-0.000061-0.0004272,0.000061-0.0006104,0c-0.0414429-0.0066528-0.0828857-0.0100098-0.1243896-0.0100098 c-0.012085,0-0.0222168,0.0080566-0.0342407,0.008606c-0.1178589,0.0049438-0.2307739,0.0319214-0.3343506,0.0841675 c-0.0170288,0.008606-0.0308838,0.0197144-0.0473022,0.02948c-0.1056519,0.0625-0.2019043,0.1419067-0.2722778,0.2478638 l-2.4539185,3.6809082c-0.3828735-0.1972046-0.7728882-0.3822632-1.1685181-0.5570679 c-0.1303711-0.0576172-0.2645874-0.1074219-0.3962402-0.1624756c-0.2680054-0.1121216-0.5358276-0.2243652-0.809082-0.3259277 c-0.1594849-0.0592651-0.3226318-0.1104736-0.4838257-0.1660767c-0.2515869-0.086731-0.5028687-0.1740112-0.7585449-0.2516479 c-0.1737061-0.0527344-0.3504028-0.0979614-0.5259399-0.1464233c-0.2476196-0.0683594-0.4951172-0.1365967-0.7462769-0.196228 c-0.1849365-0.0438843-0.3721924-0.0811768-0.55896-0.1203003c-0.2471313-0.0517578-0.4943848-0.102417-0.7445679-0.1456299 c-0.192749-0.0332642-0.387207-0.0608521-0.581665-0.0889893c-0.2483521-0.0358887-0.4971313-0.069519-0.7481689-0.0968628 c-0.199646-0.0217285-0.4003906-0.0389404-0.6016235-0.0551147c-0.2504272-0.0201416-0.501709-0.0367432-0.7545776-0.0482178 c-0.2043457-0.0092163-0.4092407-0.0152588-0.6149902-0.0187378c-0.1227417-0.0020752-0.2437744-0.0111694-0.3670044-0.0111694 c-0.2467041,0-0.4950562,0.0043945-0.7434692,0.0126953c-4.1112061,0.1394043-7.956604,1.4564819-11.1963501,3.6255493 c-5.3997192,3.6149292-9.1171265,9.5962524-9.5790405,16.4368286 c-0.8513794,12.5932007,9.1120605,23.0733032,21.5233154,23.0733032c2.1602173,0,4.2462769-0.3174438,6.2140503-0.9083252 c8.5270996-2.5603638,14.833313-10.2541504,15.3286133-19.4914551 C71.5918579,51.3682861,71.086792,50.8300171,70.4495239,50.8300171z"
            />
        </svg>
    )
}
