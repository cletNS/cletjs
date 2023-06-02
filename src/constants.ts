export const CLET_CONTRACT_0 = '0xb6D45DA9512002F24E599559bEF3ec8C5568E286'
export const CLET_CONTRACT_1 = '0x74Bd3bEB1ea954AF3ebf2d4a29F42c7eCFa99029'

export const ETH_RPC =
  'https://eth-mainnet.g.alchemy.com/v2/-X6dRenOoDm6T-KuAnKXN-BHmOVm8z3U'

export const SKALE_RPC =
  'https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague'

export const ABI_0 = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'nameExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  }
]

export const ABI_1 = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name_ticker',
        type: 'string',
      },
    ],
    name: 'resolve',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'ticker',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'icon',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'tag',
                type: 'string',
              },
            ],
            internalType: 'struct CLETCORE.Ticker',
            name: 'ticker',
            type: 'tuple',
          },
          {
            internalType: 'string',
            name: 'mappedAddress',
            type: 'string',
          },
        ],
        internalType: 'struct CLETCORE.MappedAddress',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_address',
        type: 'string',
      },
    ],
    name: 'reverseLookup',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  }
]
